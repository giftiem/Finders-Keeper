from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import time

def scrape_jobs():
    # Path to the ChromeDriver executable
    service = Service('C:\\Users\\Nthabiseng\\Downloads\\chromedriver.exe')
    options = webdriver.ChromeOptions()
    # Comment out headless mode to visually debug
    # options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36')

    driver = webdriver.Chrome(service=service, options=options)
    
    url = "https://za.indeed.com/jobs?q=&l=south+africa"
    driver.get(url)

    # Scroll to load content
    last_height = driver.execute_script("return document.body.scrollHeight")
    while True:
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
        time.sleep(3)  # Wait for new content to load
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            break
        last_height = new_height

    # Wait for job listings to be present
    try:
        job_cards = WebDriverWait(driver, 30).until(
            EC.presence_of_all_elements_located((By.XPATH, "//div[contains(@class, 'jobsearch-SerpJobCard') or contains(@class, 'result')]"))
        )
    except Exception as e:
        print(f"Timeout: Job listings did not load. {e}")
        driver.quit()
        return

    jobs = []
    for job_card in job_cards:
        try:
            title_element = job_card.find_element(By.XPATH, ".//h2[contains(@class, 'title')]/a")
            title = title_element.text.strip()
        except Exception as e:
            print(f"Error finding title: {e}")
            title = 'Title not found'
        
        try:
            company = job_card.find_element(By.XPATH, ".//span[contains(@class, 'company')]").text.strip()
        except Exception as e:
            print(f"Error finding company: {e}")
            company = 'Company not found'
        
        try:
            location = job_card.find_element(By.XPATH, ".//div[contains(@class, 'location')] | .//span[contains(@class, 'location')]").text.strip()
        except Exception as e:
            print(f"Error finding location: {e}")
            location = 'Location not specified'
        
        try:
            summary = job_card.find_element(By.XPATH, ".//div[contains(@class, 'job-snippet')]").text.strip()
        except Exception as e:
            print(f"Error finding summary: {e}")
            summary = 'Summary not available'

        jobs.append({
            'title': title,
            'company': company,
            'location': location,
            'summary': summary
        })

    # Save the scraped jobs to a JSON file
    with open('jobs.json', 'w') as file:
        json.dump(jobs, file, indent=4)

    print(f"Scraped {len(jobs)} jobs successfully.")
    driver.quit()

if __name__ == "__main__":
    scrape_jobs()

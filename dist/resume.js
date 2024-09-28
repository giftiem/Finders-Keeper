document.getElementById('resumeForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevents the form from submitting normally

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const school = document.getElementById('school').value;
  const degree = document.getElementById('degree').value;
  const gradYear = document.getElementById('gradYear').value;
  const skills = document.getElementById('skills').value;
  const jobTitle = document.getElementById('jobTitle').value;
  const company = document.getElementById('company').value;
  const jobDescription = document.getElementById('jobDescription').value;

  // Construct the URL for the API request
  const url = `https://ai-resume-generator.p.rapidapi.com/Documents/GenerateResume?university=${encodeURIComponent(school)}&degree=${encodeURIComponent(degree)}&skills=${encodeURIComponent(skills)}&jobTitle=${encodeURIComponent(jobTitle)}&company=${encodeURIComponent(company)}&jobDescription=${encodeURIComponent(jobDescription)}`;

  try {
    // Using fetch for the API request
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '098ee2f2a3mshec9715c51592a1ap107ba5jsn251c5cc99a2a',
        'x-rapidapi-host': 'ai-resume-generator.p.rapidapi.com',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    // If the response contains a URL for the resume, open the link in a new tab
    if (result && result.resumeUrl) {
      window.open(result.resumeUrl, '_blank'); // Open the generated resume in a new tab
    } else {
      alert('Error generating resume. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('There was an issue with the resume generation process.');
  }
});

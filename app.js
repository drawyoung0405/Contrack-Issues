const issuesList = document.getElementById('issuesList');

// let issues = JSON.parse(localStorage.getItem('issues') || []);
// function saveLocalStorage(){
//   localStorage.setItem('issues', JSON.stringify(issues));
// } 
let issues = [
  {
    id: 1,
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    author: 'tony',
    severity: 'Low',
    status: 'new'
  },
  {
    id: 2,
    title: 'abc',
    description: 'Hacquisitions of 2021 so far, in reverse chronological order.',
    author: 'hoa',
    severity: 'Medium',
    status: 'new'
  }
];

function renderIssues() {
  const issuesList = document.getElementById('issuesList');
  issuesList.innerHTML = '';
  issues.forEach(issue => {
    const issueElement = document.createElement('div');
    issueElement.classList.add('w-full', 'p-6', 'bg-white', 'border', 'border-gray-200', 'rounded-lg', 'shadow');
    issueElement.innerHTML = `
  
  <span class="bg-${issue.severity === 'Low' ? 'blue' : issue.severity === 'Medium' ? 'yellow' : 'red'}-100 
        text-${issue.severity === 'Low' ? 'blue' : issue.severity === 'Medium' ? 'yellow' : 'red'}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
         ${issue.severity}
      </span>
      <div class="flex items-center mb-2">
        <h5 class="mr-2 text-2xl font-bold tracking-tight text-gray-900">${issue.title}</h5>
        <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">${issue.status}</span>
      </div>
      <p class="mb-5 font-normal text-gray-700">${issue.description}</p>
         <div class="flex justify-between">
          <div class="flex items-center">
            <img class="w-10 h-10 rounded-full mr-2" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar">
             <div>${issue.author}</div>
          </div>
           <div>
            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
            focus:ring-blue-300" onclick="closeIssue(${issue.id})">
              Close
            </button>
            <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 
            focus:ring-4 focus:outline-none focus:ring-red-300" onclick="deleteIssue(${issue.id})">
               Delete
            </button>
      `
    issuesList.appendChild(issueElement);
  });
}
renderIssues();

// Add new issue
function addIssue(e){
e.preventDefault();
const title = document.getElementById('title').value;
const description = document.getElementById('description').value;
  const author = document.getElementById('author').value;
  const severity = document.getElementById('severity').value;
  const newIssue = {
    // id: issues.length + 1,
    title,
    description,
    author,
    severity,
    status: 'new'
  };
  issues.push(newIssue);
  document.getElementById('issuesForm').reset();
  renderIssues();
}
document.getElementById('issuesForm').addEventListener('submit', addIssue);

// Delete issues
function deleteIssue(id){
issues = issues.filter(issue => issue.id !== id);
renderIssues();
}
// close issue
function closeIssue(id){
  const issue = issues.find(i => i.id === id);
  if (issue) {
    issue.status = 'Closed';
    renderIssues();
  }
}


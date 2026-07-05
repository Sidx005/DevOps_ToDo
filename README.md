# Full-Stack ToDo Application With Kubernetes Deployment
<p>
This was a learning todo application built with more focus on the devops side,where I used kubernetes
for deploying the application locally. With this application, you can add your tasks, update tasks as completed or not completed, delete the tsk
once completed and also you could search the tasks.
THe UI is pretty minimalistic with a feel-good macbook theme
</p>

<img  style="border-radius:'22px'" width="1723" height="1005" alt="image" src="https://github.com/user-attachments/assets/070ad5c6-02e2-4e43-91d9-bc76902b479f" />

## Features
<ol>
  <li>
    <b>CRUD Tasks: </b> Users can create tasks by entering the title and press enter or click on Add Button, also they can update,delete and search the tasks.
    
  </li>
  <li>
    <b>Tasks Statistics Dashboard: </b> Users can view the total no of tasks created and total no of tasks completed.
  </li>

  <li>
    <b>macOS-inspired UI</b> Clean & minimalistic ui design inspired by MacOS
  </li>

  <li>
   <b> Data Validation : </b>  Utlised pydantic to validate fields,types, and defautl values and serialization.
  </li>

  <li>
    <b> Kubernetes Persistent Volume Support </b>
      Data survives pod restart,deployment restart
    
  </li>

  <li>
    <b>Containerization:</b>
      Frontend and  Backend are both separately containerised , making them isolated, consistent in depoyment and environment.
  </li>

  <li>
    <b>Docker Hub:</b> Pushed to the container registry Docker Hub 
  </li>
  
</ol>


## Project Structure

``` code
FullStackToDo

├── backend
|
├── frontend
│
├── k8s
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   └── pvc.yaml
│
├── .github
│   └── workflows
│
└── README.md

```



## Commands
<div>
<b>1. Python Virtual Environment </b>
```code
  python -m venv venv
 ```
</div>

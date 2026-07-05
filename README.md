# Full-Stack ToDo Application With Kubernetes Deployment

This was a learning todo application built with more focus on the devops side,where I used kubernetes
for deploying the application locally. With this application, you can add your tasks, update tasks as completed or not completed, delete the tsk
once completed and also you could search the tasks.
THe UI is pretty minimalistic with a feel-good macbook theme

<img style="border-radius:'12px'" width="1702" height="802" alt="Screenshot From 2026-07-05 22-13-22" src="https://github.com/user-attachments/assets/709e3500-8d62-4f32-8d8b-db2a861a1107" />

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


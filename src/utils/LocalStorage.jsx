
const employees = [
  {
    "id": 1,
    "name": "Vivek",
    "email": "e@1.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "taskFail": 0
    },
    "tasks": [
      {
        "tasktitle": "Develop API",
        "taskdescription": "Create authentication endpoints",
        "taskdate": "2025-02-20",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "taskFail": false
      },
      {
        "tasktitle": "Fix Bugs",
        "taskdescription": "Resolve reported UI issues",
        "taskdate": "2025-02-21",
        "category": "Debugging",
        "active": false,
        "newTask": true,
        "completed": false,
        "taskFail": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Anjali",
    "email": "e@2.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 0,
      "taskFail": 0
    },
    "tasks": [
      {
        "tasktitle": "Write Test Cases",
        "taskdescription": "Add unit tests for API endpoints",
        "taskdate": "2025-02-22",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "taskFail": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Mohit",
    "email": "e@3.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "taskFail": 0
    },
    "tasks": [
      {
        "tasktitle": "Design Mockups",
        "taskdescription": "Create UI wireframes for dashboard",
        "taskdate": "2025-02-23",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "taskFail": false
      },
      {
        "tasktitle": "Improve UX",
        "taskdescription": "Enhance user experience for login flow",
        "taskdate": "2025-02-24",
        "category": "UX Improvement",
        "active": false,
        "newTask": true,
        "completed": false,
        "taskFail": false
      }
    ]
  },
  {
    "id": 4,
    "name": "Ellis",
    "email": "e@4.com",
    "password": "123",
    "taskCounts": {
      "active": 0,
      "newTask": 1,
      "completed": 0,
      "taskFail": 0
    },
    "tasks": [
      {
        "tasktitle": "Optimize Database",
        "taskdescription": "Improve query performance",
        "taskdate": "2025-02-25",
        "category": "Database Optimization",
        "active": false,
        "newTask": true,
        "completed": false,
        "taskFail": false
      }
    ]
  },
  {
    "id": 5,
    "name": "David Brown",
    "email": "e@5.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "taskFail": 0
    },
    "tasks": [
      {
        "tasktitle": "Security Audit",
        "taskdescription": "Review application security policies",
        "taskdate": "2025-02-26",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "taskFail": false
      },
      {
        "tasktitle": "Update Documentation",
        "taskdescription": "Revise API documentation",
        "taskdate": "2025-02-27",
        "category": "Documentation",
        "active": true,
        "newTask": false,
        "completed": false,
        "taskFail": false
      }
    ]
  }
];


  const admin= [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }

  export const getLocalStorage=()=>{
   const employees = JSON.parse( localStorage.getItem('employees'))
   const admin = JSON.parse( localStorage.getItem('admin'))

  return{
    employees,admin
  }
    
  }
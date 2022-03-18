# Test Case

###How to Start
you can start application with docker-compose up

### Backend
<ul>
<li>Tech used : express </li>
<li>Tested with mocha and chai</li>


### How to Start Backend
**npm install** then **npm start** will be enough.
Start test with **npm test**
</ul>

### Frontend
<ul>
<li>Tech used : svelte </li>


### How to Start Frontend
**npm install** then **npm run dev** will be enough.
</ul>

### Endpoint
api/v1/getTroops

### example request 

```
   {
      "count":15,
   }
 
```

### example output format

```
{
    "code": 200,
    "success": true,
    "data": [
        { 
        spearMen: 5,
        swordMen: 3,
        archers: 7
        }
      ]
}

```
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  getInstruction('mashedPotatoes', 1, (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
    getInstruction('mashedPotatoes', 2, (step0) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
      getInstruction('mashedPotatoes', 3, (step0) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
        getInstruction('mashedPotatoes', 4, (step0) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  },(error)=>console.error(error));
  },(error)=>console.error(error));
  },(error)=>console.error(error));
},(error)=>console.error(error));
},(error)=>console.error(error));

// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction ('steak',1)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction ('steak',2)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction ('steak',3)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction ('steak',5)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction ('steak',6)
  })
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction ('steak',7)
  })
  

// Iteration 3 using async/await
async function makeBroccoli() {
  // ... Your code here 
  try {
    const step0= await obtainInstruction("broccoli", 0) 
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    const step1= await obtainInstruction("broccoli", 1) 
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    const step2= await obtainInstruction("broccoli", 2) 
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    const step3= await obtainInstruction("broccoli", 3) 
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    const step4= await obtainInstruction("broccoli", 4) 
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    const step5= await obtainInstruction("broccoli", 5) 
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction("broccoli", 6) 
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    const step7= await obtainInstruction("broccoli", 7) 
    document.querySelector("#broccoli").innerHTML += `<li>${step7}</li>`
   
  } catch (error) {
    console.log(error)
  }
}

makeBroccoli()

Promise.all(brusselsSprouts)
    .then((step) => {
      brusselsSprouts.forEach(step) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`}
  });
// Bonus 2 - Promise all
// ...
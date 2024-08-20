

        const form = document.querySelector("form")
        //this is usecase will give you empty
        // const Height = parseInt(document.querySelector("#Height").value)
        
        
        form.addEventListener('submit', function (e){
            const guid = document.querySelector("#Weight-guide>div")
            e.preventDefault()
            const Height = parseInt(document.querySelector("#Height").value)
            const Weight = parseInt(document.querySelector("#Weight").value)
            
            const results = document.querySelector("#results")
            
            if(Height === '' || Height < 0  || isNaN(Height)){
                results.innerHTML = `please give a valid height detail`
            }
            else if(Weight === '' || Weight < 0  || isNaN(Weight)){
                results.innerHTML = `please give a valid Weight detail`
            }
            else{
            const BMI = (Weight / (Height**Height)).toFixed(2)

                // show the results 
                
                results.innerHTML = `<span>${BMI}</span>`
                if(BMI < 18.6 ){
                    
                    guid.innerHTML = `Under Weight = less then  18.6`
                }
                else if(BMI <= 18.6 ){
                    guid.innerHTML = `Under Weight = less then & equal 18.6`
                }else if(BMI  < 24.9){
                    
                    guid.innerHTML = `Normal Rang = 18.6 and 24.9 `
    
                }
                else if (BMI  > 24.9){
                    guid.innerHTML =`Overweight = Greater than 24.9`
                }
                else{
                    guid.innerHTML=`your weight is not defined`
                }
            }

        })


    
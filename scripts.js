fetch('https://api.adviceslip.com/advice') 
            .then(function(response){
                return response.json()

                .then(function(data){
                    const advice = data.slip.advice
                    return advice
                })
            })
            
            .then(function verConselho(advice){
                const area = document.getElementById('header');
                
                area.append(advice)
            })

            .catch((error)=>{
                console.log("Isso não é um conselho. Aconteceu algum problema." + error.message)
            });

 
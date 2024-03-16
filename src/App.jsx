import { useEffect } from 'react'
import './App.css'
import Header from './Header'
import Card from './Card'
import { useState } from 'react'
import Food from './Food'


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [card, setCard] = useState([]);

  const [wantToCook, setWantToCook] = useState([]);

  const handleWantToCook = card=>{
   
    const isExit = wantToCook.find((pd) => pd.id === card.id);
    if(! isExit){
      setWantToCook([...wantToCook, card])
    }else{
      toast('already exit')
    }
  
  };



  // const [currentCook, setCurrentCook] = useState([]);
  

  useEffect(() => {
    fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => {
        setCard(data);
      })
  }

    , [])
  // console.log(card);

  return (
    <>

      <Header></Header>

      <div className='container mx-auto'>
        <div className='mt-8'>
          <h3 className='text-3xl mt-8 text-center font-bold'>Our Recipes</h3>
          <p className='font-normal text-center'>From beginners to seasoned cooks, our classes cater to all skill levels. Join us for an unforgettable culinary experience. Embark on a flavorful journey <br /> and master the art of cooking with our interactive and engaging classes</p>
        </div>

        <div className='lg:flex justify-between mt-8'>
          <div className='w-2/3 gap-4 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 '>
            {
              card.map(pd => <Card key={card.id} 
                card={pd}
                handleWantToCook={handleWantToCook}
              ></Card>)
            }
          </div>


          <div className="border-2 rounded-2xl lg:w-1/3">
           <Food key={card.id} wantToCook={wantToCook}    >

          </Food> 
          <ToastContainer />

       




          </div>
        </div>

      </div>


    </>
  )
}

export default App






























































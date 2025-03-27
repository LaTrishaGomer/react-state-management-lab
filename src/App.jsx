import { useState } from 'react';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';
import img5 from './assets/5.png';
import img6 from './assets/6.png';
import img7 from './assets/7.png';
import img8 from './assets/8.png';
import img9 from './assets/9.png';
import img10 from './assets/10.png';


const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: img1,
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: img2,
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: img3,
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: img4,
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: img5,
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: img6,
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: img7,
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: img8,
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: img9,
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: img10,
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }

    setTeam([...team, fighter]);

    const updatedFighters = zombieFighters.filter((f) => {
      return f.id !== fighter.id;
    });
    setZombieFighters(updatedFighters);

    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter((member) => {
      return member.id !== fighter.id;
    });
    setTeam(updatedTeam);
  
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };
  

  let totalStrength = 0;
  for (let i = 0; i < team.length; i++) {
    totalStrength += team[i].strength;
  }

  let totalAgility = 0;
  for (let i = 0; i < team.length; i++) {
    totalAgility += team[i].agility;
  }


  return (
    <div>
      <h1>Zombie Apocalypse Team Builder</h1>
      <p>Money: ${money}</p>

      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((fighter) => (
          <li key={fighter.id}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>Your Team</h2>
      {team.length === 0 ? (
  <p>Pick some team members!</p>
) : (
  <>
    <ul>
      {team.map((member) => (
        <li key={member.id}>
          <img src={member.img} alt={member.name} />
          <h3>{member.name}</h3>
          <p>Price: {member.price}</p>
          <p>Strength: {member.strength}</p>
          <p>Agility: {member.agility}</p>
          <button onClick={() => handleRemoveFighter(member)}>Remove</button>
        </li>
      ))}
    </ul>
    <h3>Total Strength: {totalStrength}</h3>
    <h3>Total Agility: {totalAgility}</h3>
  </>
)}
    </div>
  );
};

export default App;

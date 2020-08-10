import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app/';


ReactDOM.render(
    <>
      <App />
    </>,
    document.getElementById('root')
);


















// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26
//     }

//     this.nextYear = this.nextYear.bind(this);
//   }

//   nextYear() {
//       this.setState(state => ({ 
//         years: ++state.years
//       }))
//   }
//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return(
//       <React.StrictMode>
//         <button onClick={this.nextYear}>++</button>
//         <h1>My name is {name}, 
//             surname - {surname},
//             years = {years} </h1>
//         <a href={link}>My profile</a> 
//       </React.StrictMode>
//     )
//   }
// }
// function WhoAmI({name, surname, link}) {
//   return (
//     <React.StrictMode>
//       <h1>My name is {name}, 
//           surname - {surname} </h1>
//       <a href={link}>My profile</a> 
//     </React.StrictMode>
     
//   )
// }

// const All = () => {
//   return (
//     <>
//       <WhoAmI name='Anar' surname='Sov' link='vk.ru'/>
//       <WhoAmI name='Rob' surname='Rat' link='ru.ru'/>
//       <WhoAmI name='Alex' surname='Sow' link='az.ru'/>
//     </>
//   )
// }
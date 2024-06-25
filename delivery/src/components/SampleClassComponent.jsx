// class Sampleclass extends React.Component{
//     render()(
//         return <h1>This is a sample class</h1>;
    
//     )
// }
function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Car color="red"/>);
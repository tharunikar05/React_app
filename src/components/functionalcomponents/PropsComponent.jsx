import "../css/PropsComponent.css";
function PropsComponent(props)
{
 // const styleAttrs={
  //  backgroundColor:"pink"
  //style={styleAttrs }
  return(
    <div > 
        {props.name} <br></br>This is {props.course} class
    </div>//color coding not use. //inline css
  )
}
export default PropsComponent;
//http://localhost:3000/
//files:/users/website namer
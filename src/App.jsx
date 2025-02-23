
import './App.css'


// Default export component
export default function App() {

  const data = {
    title: 'React Bangla Tutorial',
    author: 'unknown',
    content: 'React Componet  Create '
  }
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  const person = {
    name: "Gregorio Y. Zara",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  return (
    <>
      <h1>Vite + React</h1>
      <p>I am Learning React js Again today</p>
      <h3>Title: {data.title}</h3>
      <h4>Author : {data.author}</h4>
      <p>Content : {data.content}</p>

      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />

      <hr />

      <img className="avatar" src={avatar} alt={description} />;

      <div>
        <h1>Amazing scientists</h1>
        <Profile></Profile>
      </div>

      <div style={person.theme}>
        <h1>{person.name}s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  )
}




// Named Export Component
export function Profile() {
  return (
    <div>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
    </div>
  )
}
import pro0 from '../Assets/chatapp.jpg'
import pro1 from '../Assets/project1.jpg'
import pro2 from '../Assets/project2.png'
import pro3 from '../Assets/project3.png'
import pro4 from '../Assets/project4.png'
import pro6 from '../Assets/project6.png'


const ProjectCardData = [

    {
        imgsrc:pro0,
        title : "Chat-App",
        text : 
        " A dynamic and responsive full-stack Chat Application built with the MERN stack—MongoDB, Express.js, React.js, Node.js—and Tailwind CSS. It supports real-time messaging using Socket.io, ensuring instant communication between users. The interface features a user list on the left and a chat window on the right, with the list automatically updated to show the user with the latest message at the top.Messages are stored in MongoDB for easy retrieval, and the responsive design ensures a seamless experience across devices. The scalable architecture makes it ideal for future enhancements, providing a modern, user-friendly platform for real-time communication and JWT-based authentication.. "


       ,
        view : "https://chatapp-deployment-o2q4.onrender.com",
        source :"https://github.com/vatsamit/Chatapp"
    } ,
{
    imgsrc:pro1,
    title : "E-Learning Platform",
    text : 
    "Developed an interactive e-learning platform leveraging React's Context API for state management and React Router for seamless navigation. The platform offers comprehensive tutorials on key technologies including Node.js, Azure, SQL, and React. Users can easily navigate through the courses, track their progress, and interact with hands-on exercises. The use of context and routing ensures a smooth learning experience, facilitating understanding and engagement with the material."
   ,
    view : "https://e-learning-amit.netlify.app",
    source :"https://github.com/vatsamit/Learning-react-app"
} ,


{
    imgsrc:pro6,
    title : "Personal Portfolio",
    text : "Explore my React-powered portfolio, showcasing diverse projects with seamless navigation and dynamic user experiences. Leveraging React components, state management, and props, the site adapts to various devices and user interactions. With React Router, easily delve into project details and personal information.Discover my passion for technology and innovation in this comprehensive portfolio, encapsulating my journey, skills, and aspirations" ,
    
    view : "https://github.com/vatsamit/Personal-Portfolio",
    source :"https://github.com/vatsamit/Personal-Portfolio.git "
} ,

{
    imgsrc:pro2,
    title : "Blogging-App",
    text :
    "Crafted a dynamic blogging application using React's state management capabilities and Firebase for backend functionality. This platform enables users to create, edit, and publish blog posts seamlessly. Leveraging React's state, the app delivers a responsive and intuitive user interface, while Firebase ensures real-time data synchronization and secure storage. Users can engage with rich content creation tools and interact with each other through comments, fostering a vibrant community around shared interests." ,

    view : "https://blogging-firebase.vercel.app/",

    source :"https://github.com/vatsamit/blogging-firebase"
} ,


{
    imgsrc:pro3,
    title : "Todo AND Notekeeper-app",
    text : 
    "Engineered a robust todo and note-keeping application by implementing advanced Redux concepts such as middleware for asynchronous actions, seamlessly integrating Axios for server communication. Leveraging Fetch and RESTful APIs, the app securely stores and retrieves data, ensuring permanent persistence on the server. Users experience seamless interaction, empowered by real-time synchronization across devices. This comprehensive solution provides a reliable platform for managing tasks and organizing thoughts efficiently.",

    view : "https://todolist-react-redux-gamma.vercel.app/",
    source :" https://github.com/vatsamit/todolist-react-redux"
} ,

{
    imgsrc:pro4,
    title : "Shopping Cart-APP",
    text : "Shopping cart feature in a React app using context and state management. Through the CustomItemContext component, it creates a context to centralize cart data like total amount, individual items, and cart contents. This component offers functionalities to add, remove, and clear items from the cart, along with toggling the cart modal's visibility. By exporting the context and a custom hook, it enables seamless integration of shopping cart capabilities into other components." ,
    
    view : "https://amit-shoppingcart.netlify.app",
    source :" https://github.com/vatsamit/shoppingCart-react"
} ,




];

export default  ProjectCardData ;

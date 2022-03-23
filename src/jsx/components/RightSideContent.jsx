import '../../stylesheets/RightSideContent.css'
import Bryan from '../character_pages/Byran';

/*
Add some sort of state management that changes which component is rendered here
based on which character is focued in the CharacterSidebar component
*/
function RightSideContent() {
    return (
        <section className="right-side-content">

            <article className="introduction">
                <h1>Bryan Fury</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur voluptates odit at, aperiam cumque dignissimos in vitae officiis assumenda. Doloremque laborum suscipit quaerat, nisi quibusdam quia quae ullam aperiam quas sunt! Quos assumenda autem asperiores dignissimos laudantium. Id, laboriosam obcaecati quidem sunt deserunt temporibus? Reprehenderit vero est a ratione veritatis magni sit suscipit eaque eius repellendus numquam voluptas pariatur, temporibus iste earum nulla rem nam voluptatibus dignissimos beatae, aut dicta placeat. Minus quibusdam optio iusto nemo necessitatibus. Facere eos beatae adipisci natus sequi, unde odit similique! Nisi doloribus tempore laudantium? Expedita, consequatur soluta non delectus voluptate beatae quae esse ullam.</p>
            </article>

        </section>
    )
}



export default RightSideContent;
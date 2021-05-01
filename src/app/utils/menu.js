
// const displayMenu = () => {
//     // const menuButton = document.getElementById('menuButton');
//     const menuButton = document.getElementById('menu');
//     const displayMenuOptionsHTML =
//         `<ul id ='menuElements'class='menu__elements'>
//             <li id='menuHome'>Home</li>
//             <li id='menuArena'>Arena</li>
//         </ul>`;
//     menuButton.innerHTML = displayMenuOptionsHTML
    
//     // if (document.querySelector('.menu__elements').getElementsByClassName.display != 'none') {
//     //     menuButton.innerHTML = displayMenuOptionsHTML      
//     // }else{
//     //     menuButton.innerHTML = '';
//     // }
//     debugger
//     if (document.getElementById('menuElements').style.display==='block') {
//         document.getElementById('menuElements').style.display='none'
//     }else{
//         document.getElementById('menuElements').style.display='block'
//     }
// };

const displayMenu = () => {
    if (document.getElementById('menuElements').style.display==='none') {
        document.getElementById('menuElements').style.display='block'
    }else{
        document.getElementById('menuElements').style.display='none'
    }
}

export {displayMenu};
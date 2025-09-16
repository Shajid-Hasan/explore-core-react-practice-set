// export default function ToDo({task, isDone}){

//     return(
//         <li>{task} {isDone}</li>
//     )
// }

// export default function ToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done : {task}</li>
//     }
//     else{
//         return <li>Pending : {task}</li>
//     }
// }

// export default function ToDo({task, isDone, time = 0}){
//     if(isDone === true){
//         return <li>Done : {task} Duration : {time}</li>
//     }
//     return <li>To be done : {task}</li>
// }

export default function Food({resturent, hungry, rest, money, time, hotel}){
    if(hungry && money >= 90){
        return <food>Go to Resturent {resturent} and after meal {time} {rest}</food>
    }
    else{
        return <food>Going to {hotel}</food>
    }
}
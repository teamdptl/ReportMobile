export const switchScreen = (userRole, navigation) => {
    switch (userRole) {
        case "user":
            console.log("user navigation");
            navigation.replace("User");
            break;
        case "manager":
            console.log("manager navigation");
            navigation.replace("Manager");
            break;
        case "worker":
            console.log("worker navigation");
            navigation.replace("Worker");
            break;
        default:
            console.log("login navigation");
            navigation.replace("Login");
            break;
    }
};
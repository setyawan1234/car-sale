export const userLogin = async (data) => {
    return new Promise((resolve, reject) => {
        const dummyUser = { username: "user1", password: "1234" }

        setTimeout(() => {
            if (
                data.username === dummyUser.username &&
                data.password === dummyUser.password
            ) {
                resolve({ message: "Login Success", payload: data });
            } else if (
                data.username === dummyUser.username &&
                data.password !== dummyUser.password
            ) {
                reject({ message: "Password is incorrect", payload: data });
            } else if (
                data.username !== dummyUser.username &&
                data.password === dummyUser.password
            ) {
                reject({ message: "Username is incorrect", payload: null });
            } else {
                reject({ message: "Username and Password is incorrect", payload: null });
            }
        }, 1000)
    })
}

export const userRegister = async (data) => {
    return new Promise((resolve, reject) => {
        const dummyUser = { username: "user1", password: "1234" }

        setTimeout(() => {
            if (
                data.username === dummyUser.username &&
                data.password === dummyUser.password
            ) {
                resolve({ message: "Register Success", payload: data });
            } else {
                reject({ message: "Username already exist", payload: null })
            }
        }, 1000)
    })
}
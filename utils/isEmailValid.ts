export default function isEmailValid(email: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        return false
    };
    return true
}
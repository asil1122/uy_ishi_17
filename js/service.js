export const getData = async (value) => {
    try {
        const res = await fetch(`https://data-lesson-13.vercel.app/all?title_like=${value}`)
        const data = await res.json()

        return data
    } catch (error) {
        return error.message
    }
}
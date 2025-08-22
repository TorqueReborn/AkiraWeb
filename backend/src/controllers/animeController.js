export const test = (req, res) => {
    console.log('Api working')
    return res.json({success: true})
}
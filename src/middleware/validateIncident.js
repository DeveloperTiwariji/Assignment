module.exports = (req, res, next) => {
    const { title, description, severity } = req.body;
    const validSeverities = ['Low', 'Medium', 'High'];
  
    if (!title || !description || !severity) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    if (!validSeverities.includes(severity)) {
      return res.status(400).json({ message: 'Invalid severity value' });
    }
  
    next(); 
  };
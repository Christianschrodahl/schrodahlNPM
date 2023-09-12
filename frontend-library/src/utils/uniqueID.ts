export default function generateRandomUniqueID(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let uniqueID = '';
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uniqueID += characters.charAt(randomIndex);
    }
  
    return uniqueID;
  }
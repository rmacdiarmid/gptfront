// src/utils/cleanImageName.js
const cleanImageName = (imageName) => {
    const startIndex = imageName.lastIndexOf("/") + 1;
    const cleanName = imageName.substring(startIndex);
    console.log(startIndex)
    console.log(cleanName)

    return cleanName;
};

export default cleanImageName;

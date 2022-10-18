const profileDataArgs = process.argv.slice(2, process.argv.length);
//to return through the last index of an array we provide length as second args
const printProfileData = profileDataArr => {
  profileDataArr.forEach(profileItem =>
        console.log(profileItem));
}
printProfileData(profileDataArgs);


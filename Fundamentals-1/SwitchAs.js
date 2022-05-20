let language = prompt("What's Your language");

switch (language) {
    case 'Mandarin':
    case 'Chinese':
        console.log("Most Number of Native Speakers");
        break;
    case 'Spanish':
        console.log("2nd most native Speakers");
        break;
    case 'English':
        console.log("3rd most Native Speakers");
        break;
    case 'Hindi':
        console.log("4rth Most Native Speaker");
        break;
    case "Arabic":
        console.log('5th Most Native Speakers');
        break;
    default:
        console.log("Other Languages are Great too");
}
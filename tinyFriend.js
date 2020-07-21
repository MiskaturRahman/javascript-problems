//tinyFriend

function tinyFriend(friends) {
    var tiny = friends[0];

    //if the array is empty
    if (friends.length < 1) {
        console.log("sorry there is no name in this array");
        return undefined;
    }

    for (var i = 0; i < friends.length; i++) {
        var newTiny = friends[i];
        if (newTiny.length < tiny.length) {
            tiny = newTiny;
        }
    }
    return tiny;
}

shortFriendName = tinyFriend(['Alam', 'kalam', 'jalaluddin', 'abdullah', 'Rana']);
console.log("The tiniest friend from the array is: " + shortFriendName);
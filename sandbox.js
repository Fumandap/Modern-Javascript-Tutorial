// object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    // arrow function doesn't work when using this. May work unexpectedly.
    // can also write like this, use regular functions when in an object and can use the simplified version.
    // logBlogs(){
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

user.login();
user.logout();
user.logBlogs();

const name = 'mario';
name.toUpperCase();
console.log(name);


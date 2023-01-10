// object literals

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
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
            console.log(blog.title, blog.likes);
        });
    }
};

user.login();
user.logout();
user.logBlogs();

const name = 'mario';
name.toUpperCase();
console.log(name);


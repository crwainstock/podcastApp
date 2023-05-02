# Podcast App

This app was developed by three members of a CodeOp Full Stack bootcamp cohort. The app allows users to search for podcast episodes by topic, listen to episodes in the app, and add favorite episodes to a playlist.

The project goals included:

- working remotely and asynchronously to build the app from conception to production (via GitHub)
- going through the design process using Agile methodologies
- using development support tools like Trello, Figma, etc to facilitate collaboration
- building a minimally functional app

### Front End (localhost: 3000)

- **React**
- **Vite**

**Getting started:**

- Go into the client directory by entering `cd client` into the Terminal
- Install the dependencies with `npm install`
- Run `npm run dev` to see the app

### Back End (localhost: 5001)

- **Express**
- **Node**
- **MySQL**

**Getting started:**

- Run `npm install` to install the dependencies in the project folder
- To start the server, run `npm start`

### Database Prep

Create `.env` file in server directory and add

```
DB_HOST=localhost
DB_USER=root
DB_PASS=TYPE YOUR PASSWORD
DB_NAME=podcast
SUPER_SECRET=YOUR SECRET KEY
```

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `CREATE DATABASE podcast;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Open another terminal and go into the project folder and run `npm run migrate`. This will create the tables needed for this project since this has been configured in the package.json of the server.

### Dependencies

The project uses [react-router-dom](https://reactrouter.com/en/main) to enable multiple pages in the application, [unirest](https://www.npmjs.com/package/unirest) to facilitate interactions with the [Listen Notes API](https://www.listennotes.com/api/docs/).

### First, a look back...

This project was a fun and challenging build. Due to a globally distributed team, time management proved to be a challenge that we weren't able to completely overcome. We planned to implement user profiles with authentication and authorization using [JSON Web Tokens](https://jwt.io/) and [bcrypt](https://www.npmjs.com/package/bcrypt) so users could add favorite podcast episodes to their personal playlist.

This functionality was almost complete by the project deadline, but the "Add to favorites" functionality isn't quite done. That being said, with a little more time, we would have been able to complete this feature.

### Future Directions

- Enable "Add to favorites" functionality
- Enable "Delete from favorites" functionality
- Fine tune responsive design
- Ability to close player without reloading app
- Improve user flow to account details
- View episode details and listen from personal playlist
- Ability to take notes about episodes in personal playlist
- Enable multiple playlists

### Links

- [Project Presentation Slides](https://docs.google.com/presentation/d/1gnEdT3RED8NwjqLBgb56dx9DoSKqEKYiipeo1NttxLM/edit#slide=id.p)
- [Basic functionality demo video](https://www.awesomescreenshot.com/video/16478577?key=cf30360042eedd6407a79465a4c4c40d)
- [User favorites/account demo video](https://www.awesomescreenshot.com/video/16459123?key=6aecbaa7833c01756d5aee92c1890897)

### Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._

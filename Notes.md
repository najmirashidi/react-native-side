initialRoute is exactly what is sounds like - the first component we want to render when our app starts.

renderScene is a function which expects a component to be returned. We render the appropriate component depending on the name of the route. To achieve this, we use JavaScript's switch/case syntax.

dataSource: this is the data that the ListView renders. In it's most simple format, this can be an array of data that is converted into a ListView.DataSource.

contentInset: this is the margin for the ListView. We added 49 because of the tab bar at the bottom

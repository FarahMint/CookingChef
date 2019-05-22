const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const getRecipes = async () => {
    try {
        const data = await fetch(`https://www.food2fork.com/api/search?key=${REACT_APP_API_KEY}`);
        const jsondata = await data.json();
  
        this.setState({
          recipes: jsondata.recipes
        });
        // console.log(this.state.recipes);
      } catch (err) {
        console.log(err);
      }
};
 

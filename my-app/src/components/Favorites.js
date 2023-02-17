const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <ul>
      {favorites.map(favorite => (
        <li key={favorite.id}>{favorite.title}</li>
      ))}
    </ul>
  );
}
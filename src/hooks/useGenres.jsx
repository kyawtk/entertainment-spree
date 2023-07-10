export const useGenres =(selectedGenres)=>{
    const genreIds = selectedGenres.map(genre => genre.id)
    
    return genreIds.join('%2C')
}
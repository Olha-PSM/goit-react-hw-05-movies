import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import { Search, SearchForm, SearchBtn, SearchInput } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('searchQuery') ?? '';

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.searchQuery.value.trim() === '') {
      toast.warn('Please, fill input search field');
      return;
    }
    setSearchParams({ searchQuery: e.target.elements.searchQuery.value });
  };

  return (
    <Search>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Enter movie..."
          name="searchQuery"
          defaultValue={search}
        />

        <SearchBtn type="submit">
          <BsSearch size={'2em'} />
        </SearchBtn>
      </SearchForm>
    </Search>
  );
};

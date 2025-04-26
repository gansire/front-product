import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { apiRoutes } from '../api/routes';

type Category = {
  id: number;
  name: string;
};

type CategoryContextType = {
  category: Category[];
  setCategory: (category: Category[]) => void;
};

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<Category[]>([]);
  useEffect(()=> {
    if(category.length === 0 ){
        api.get(apiRoutes.category)
            .then(res => setCategory(res.data))
            .catch(err => console.error("erro ao buscar categoria:", err))
    }
    },[])
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext precisa estar dentro de um CategoryProvider');
  }
  return context;
}
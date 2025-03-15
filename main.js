
import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js@2.7.1'

const supabaseUrl = 'https://ccbvauyhuwfvrotpfoxd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNjYnZhdXlodXdmdnJvdHBmb3hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwNjYwMDcsImV4cCI6MjA1NzY0MjAwN30.M3b7bxl_jjAkWBChiXlFgYuVXX0oYwrl52cKWvStKpo'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
  .from('books')
  .select('*')

    for (let book of books) {
       const row = document.createElement('tr');

       row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td>${book.isbn}</td>
       `;

       bookTableBody.appendChild(row);
    }
}

getBooks();


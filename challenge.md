### Assignment: Landing Page Dashboard with Routing

#### Objective
Develop a dashboard application that allows users to create and manage multiple landing pages. The application should utilize client-side routing to navigate between different sections.

---

#### Features

1. **Dashboard Home**
    - Display a list of existing landing pages with options to "Edit", "View", and "Delete".

2. **Landing Page Creation**
    - Implement a form to create a new landing page with a title, description, and a set of predefined components (Header, Footer, Text Block, Image).

3. **Landing Page Editor**
    - Use a separate route to edit each landing page.
    - Allow users to add, remove, and modify components on the landing page.
  
4. **Preview and Publish**
    - Add a "Preview" button in the editor to see the landing page's appearance.
    - Include a "Publish" option that changes the status of the landing page to "Live".

5. **View Landing Page**
    - Implement client-side routes to display the live landing pages.

6. **Authentication**
    - Implement a simple login page.
    - Protect the dashboard route, making it accessible only to authenticated users.

7. **Bonus: Analytics**
    - Add a section in the dashboard to show basic analytics like views and click-through rates for each landing page.

---

#### Technical Requirements

- Use Next.js for server-side rendering and client-side routing.
- Use React.js for the frontend.
- Implement state management for handling landing pages and their components.
- Store landing pages and their details in local storage or use mock API calls to simulate a database.

---

#### Submission

- Push your code to a GitHub repository.
- Deploy the Next.js application on a hosting platform like Vercel.
- Include a `README.md` with instructions on how to run your project.

---

#### Evaluation Criteria

- Functionality: Does the application do what it's supposed to?
- Code Quality: Is the code well-organized and documented?
- UI/UX: Is the application visually appealing and easy to use?
- Bonus: Extra features like analytics or advanced functionalities.

Good luck!
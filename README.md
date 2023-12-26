# Generative-AI-Storybook

The Generative-AI-Storybook project focuses on generating descriptions and images for pages in a children's book. Leveraging the LangChain library for natural language processing, the project seamlessly integrates with external services such as OpenAI and Replicate. Its primary functionality involves populating page images based on the book's content, with the generated images and descriptions being updated in a data model.

## Transformative Features:

- **Full-Stack Transformation**: Convert your React application into a comprehensive full-stack solution.

- **AI-Oriented Backend Operations**: Execute artificial intelligence-oriented background operations on the backend, managing nuances like throttling and ensuring data consistency.

- **Text-to-Image Models Integration**: Incorporate text-to-image models for generating images within your applications.

- **Strategic Design and Iterative Processes**: Utilize strategic design and iterative processes for prompts, enhancing the quality of generated content.

- **Model Chaining for Precision**: Employ model chaining to enhance the precision of prompts and the overall quality of generated images.

## Database link:
```bash
[https://supabase.com/dashboard/project/owjzzdbdtbxmzjfuvktr/editor/29257](https://dashboard.convex.dev/t/soumyojyotisaha/ai-generative-storybook/outgoing-peacock-788/data?table=chapters)
```

## Technologies:

1. [Convex](https://convex.dev) - Backend application platform
2. [LangChain.js](https://github.com/hwchase17/langchainjs) - Model chaining and composition
3. [OpenAI](https://platform.openai.com) - Chat model service (GPT-3.5)
4. [Replicate](https://replicate.com) - Text-to-image model service (Kandinsky-2)
5. [React](https://react.dev/) - User interface framework
6. [Tailwind](https://tailwindcss.com/) - Cascading Style Sheets framework
7. [DaisyUI](https://daisyui.com/) - Tailwind-based component library
8. [Vite](https://vitejs.dev/) - Frontend development environment

## Key Components:

### LangChain Library:

The project utilizes the LangChain library, providing abstractions for working with language models (LLMs), prompts, and chains.

### Actions:

The main entry point, `populatePageImage` action, is triggered with specific arguments (pageNumber and version). It fetches the current book state and, if not outdated, generates and updates images and descriptions for the specified page.

### Chains:

The code defines two main chains: `getImageChain` and `getSummarizeChain`. `getImageChain` generates images based on a provided description using the Replicate service and a specific image model (ai-forever/kandinsky-2). `getSummarizeChain` creates a summary description of a scene in the children's book using the ChatOpenAI model, handling both system and human messages in the prompt.

### Prompt Templates:

The code includes prompt templates guiding the input and output of the language models. For image generation, a prompt is constructed in the style of a children's book illustration based on a given page description. For summarization, a conversation-style prompt instructs the user to provide a brief description of a scene on a specific page.

### Integration with External Services:

The project integrates with external services like Replicate (for image generation) and OpenAI (for text summarization).

### Data Model Interaction:

The `populatePageImage` action interacts with the data model (`internal.chapters.updateChapterImage`) to store the generated image URL and description for a specific page.

### Functioning:

1. Takes page number and version as arguments.
2. Checks if the book version is outdated; if so, exits.
3. Fetches the book state and proceeds only if the content of the specified page is not empty.
4. Calls `getPageImage` to generate a page description and image URL.
5. Updates the data model with the generated information.

### `getPageImage` Function:

1. Creates chains for summarization and image generation.
2. Calls these chains with book paragraphs and the number of pages.
3. Returns the generated page description and image URL.

### `getImageChain` and `getSummarizeChain` Functions:

1. Construct prompt templates for image generation and summarization.
2. Initialize LLM chains with prompt templates, models, and output keys.

## Getting Started

1. **Clone the Repository:**
   ```bash
   https://github.com/Soumyojyotisaha/Generative-AI-Storybook.git
   cd ai-book
   npm install
   npm run dev
   npx convex dev

2.**Usage:**
The project involves generating descriptions and images for pages in a children's book.

3.**Contribution:**
Feel free to contribute to the project by submitting issues or pull requests. For major changes, please open an issue to discuss the proposed changes.

4.**License:**
This project is licensed under the MIT License - see the LICENSE file for details.
Replace the placeholders with your actual project details, and feel free to enhance the README based on your project's specific features and requirements.

![Image]()

# Generative-AI-Storybook
The project involves generating descriptions and images for pages in a children's book. The project utilizes the LangChain library for natural language processing and includes integration with external services like OpenAI and Replicate. The overall functionality involves populating page images based on the content of the book, with the generated images and descriptions being updated in a data model.

*Transforming your React application into a comprehensive full-stack solution
*Executing artificial intelligence-oriented background operations on the backend, encompassing nuances such as throttling and data consistency
*Incorporating text-to-image models for the generation of images within your applications
*Strategic design and iterative processes for prompts
*Employing model chaining to enhance the precision of prompts and the quality of generated images

##Technologies:

1.Convex (https://convex.dev) - Backend application platform
2.LangChain.js (https://github.com/hwchase17/langchainjs) - Model chaining and composition
3.OpenAI (https://platform.openai.com) - Chat model service (GPT-3.5)
4.Replicate (https://replicate.com) - Text-to-image model service (Kandinsky-2)
5.React (https://react.dev/) - User interface framework
6.Tailwind (https://tailwindcss.com/) - Cascading Style Sheets framework
7.DaisyUI (https://daisyui.com/) - Tailwind-based component library
8.Vite (https://vitejs.dev/) - Frontend development environment

##Key Components:

##LangChain Library:
The project uses the LangChain library, which provides abstractions for working with language models (LLMs), prompts, and chains.

##Actions:
The populatePageImage action is a main entry point triggered with specific arguments (pageNumber and version). This action fetches the current book state and, if not outdated, generates and updates images and descriptions for the specified page.

##Chains:
The code defines two main chains: getImageChain and getSummarizeChain.
getImageChain is responsible for generating images based on a provided description. It uses the Replicate service and a specific image model (ai-forever/kandinsky-2).
getSummarizeChain is designed to create a summary description of a scene in the children's book using the ChatOpenAI model. It handles both system and human messages in the prompt.

##Prompt Templates:
The code defines prompt templates for guiding the input and output of the language models.
For image generation, a prompt is constructed in the style of a children's book illustration based on a given page description.
For summarization, a conversation-style prompt is created, instructing the user to provide a brief description of a scene on a specific page.

##Integration with External Services:
The project integrates with external services like Replicate (for image generation) and OpenAI (for text summarization).

##Data Model Interaction:
The populatePageImage action interacts with the data model (internal.chapters.updateChapterImage) to store the generated image URL and description for a specific page.

##Functioning:

##populatePageImage Function:
Takes page number and version as arguments.
Checks if the book version is outdated; if so, exits.
Fetches the book state and proceeds only if the content of the specified page is not empty.
Calls getPageImage to generate a page description and image URL.
Updates the data model with the generated information.
getPageImage Function:

Creates chains for summarization and image generation.
Calls these chains with book paragraphs and the number of pages.
Returns the generated page description and image URL.
getImageChain and getSummarizeChain Functions:

Construct prompt templates for image generation and summarization.
Initialize LLM chains with prompt templates, models, and output keys.

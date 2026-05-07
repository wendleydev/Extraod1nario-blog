const categoryIcons = {
  "reflexoes-pessoais": "💭",
  "reflexoes-sociais": "🌍",
  "desenvolvimento-pessoal": "🌱",
  "experiencias-de-vida": "📖",
  "pensamentos-filosoficos": "🤔",
};

export const toCategorySlug = (categoryName) =>
  categoryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const buildCategoriesFromPosts = (posts) => {
  const grouped = posts.reduce((acc, post) => {
    const slug = toCategorySlug(post.category);

    if (!acc[slug]) {
      acc[slug] = {
        name: post.category,
        slug,
        count: 0,
        icon: categoryIcons[slug] || "📝",
      };
    }

    acc[slug].count += 1;
    return acc;
  }, {});

  return Object.values(grouped).sort((a, b) => b.count - a.count);
};


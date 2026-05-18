import fallbackBlogs from "./blogs.json";

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  summary: string;
  isLatestFeatured?: boolean;
  content: string;
}

/**
 * Fetches all strategy blogs from Supabase.
 * If Supabase URL/Key environment variables are not set or the request fails,
 * it safely falls back to loading the local static blogs.json data.
 */
export async function fetchBlogs(): Promise<BlogArticle[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    // Graceful fallback for local development or static builds before Supabase setup
    return fallbackBlogs as BlogArticle[];
  }

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/blogs?select=*`, {
      method: "GET",
      headers: {
        "apikey": supabaseKey,
        "Authorization": `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 } // Next.js Cache validation every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Supabase API responded with status ${res.status}`);
    }

    const data = await res.json();
    if (Array.isArray(data)) {
      return data.map((item: any) => ({
        id: item.id || item.slug,
        title: item.title,
        category: item.category,
        readTime: item.read_time || item.readTime || "6 min read",
        date: item.date || new Date(item.created_at || Date.now()).toLocaleDateString("en-US", { 
          month: "short", 
          day: "numeric", 
          year: "numeric" 
        }),
        author: item.author || "Railway Expert",
        summary: item.summary,
        isLatestFeatured: Boolean(item.is_latest_featured ?? item.isLatestFeatured),
        content: item.content
      }));
    }
  } catch (error) {
    console.error("Failed to fetch blogs from Supabase. Falling back to local static JSON database:", error);
  }

  return fallbackBlogs as BlogArticle[];
}

/**
 * Fetches a single strategy blog by its unique slug ID.
 */
export async function fetchBlogById(id: string): Promise<BlogArticle | null> {
  const allBlogs = await fetchBlogs();
  return allBlogs.find(blog => blog.id === id) || null;
}

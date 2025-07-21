//  *  - https://www.youtube.com/watch?v=VIDEO_ID
//  *  - https://youtu.be/VIDEO_ID
//  *  - https://youtube.com/shorts/VIDEO_ID
//  *  - https://www.youtube.com/embed/VIDEO_ID
//  *
//  * @param {string} urlString - The full YouTube URL.
//  * @returns {string|null} - The extracted video ID, or null if none found.

const getYouTubeVideoID = (urlString: string) => {
  try {
    const url = new URL(urlString);
    const host = url.hostname.toLowerCase();
    const path = url.pathname;

    // youtu.be/<id>
    if (host === "youtu.be") {
      return path.slice(1).split(/[/?#]/)[0] || null;
    }

    // youtube.com domains
    if (host.endsWith("youtube.com")) {
      // watch?v=<id>
      if (path === "/watch") {
        return url.searchParams.get("v");
      }
      // shorts/<id> or embed/<id>
      const parts = path.split("/");
      if (parts[1] === "shorts" || parts[1] === "embed") {
        return parts[2] || null;
      }
    }

    // no match
    return null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    // invalid URL
    return err.message.includes("Invalid URL") ? null : err;
  }
};

export default getYouTubeVideoID;

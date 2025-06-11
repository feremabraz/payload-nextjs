import { getPayload } from "payload";
import config from "../payload.config";

const checkMedia = async () => {
  const payload = await getPayload({ config });

  console.log("🔍 Checking uploaded media files...");

  try {
    const mediaFiles = await payload.find({
      collection: "media",
      limit: 100,
    });

    console.log(`Found ${mediaFiles.docs.length} media files:`);

    for (const file of mediaFiles.docs) {
      console.log(`- ID: ${file.id}, Filename: ${file.filename}, Alt: ${file.alt || "No alt"}`);
    }
  } catch (error) {
    console.error("❌ Error checking media:", error);
  }
};

checkMedia();

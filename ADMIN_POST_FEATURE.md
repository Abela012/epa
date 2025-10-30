# Admin Post News Feature - Setup Guide

## What's Been Added

An admin-only "Post News" button has been added to the About Us page (`/aboutUs`). This button allows admin users to create news and events posts with:
- **Title** - Required text field
- **Description** - Required textarea for detailed content
- **Image** - Optional image upload (PNG, JPG, JPEG up to 5MB)

## Files Created/Modified

### New Files
1. **`components/post-news-modal.tsx`** - Modal component with form for creating news posts
2. **`pages/api/news/index.js`** - API endpoint to handle news post creation
3. **`set-admin.js`** - Utility script to set users as admins

### Modified Files
1. **`app/aboutUs/page.tsx`** - Added admin post button in hero section
2. **`pages/api/auth/signin.js`** - Updated to include `isAdmin` flag in JWT and response
3. **`pages/api/auth/me.js`** - Updated to include `isAdmin` flag in user data
4. **`app/page.tsx`** - Updated user type to include optional `isAdmin` field

## How to Set Up an Admin User

Before you can use the post feature, you need to set at least one user as an admin:

### Option 1: Using the Admin Script (Recommended)

1. Open your terminal in the project directory
2. Run the admin setup script:
   ```powershell
   node set-admin.js
   ```
3. The script will show all users in your database
4. Enter the email of the user you want to make admin
5. The user will now have admin privileges

### Option 2: Directly in MongoDB

If you prefer to set admin manually in MongoDB:

1. Open MongoDB Compass or your MongoDB client
2. Connect to your database (`epa-item-bank`)
3. Open the `users` collection
4. Find the user you want to make admin
5. Add a field: `isAdmin: true`
6. Save the changes

## How to Use the Feature

1. **Sign in** as an admin user on the homepage
2. Navigate to the **About Us** page (`/aboutUs`)
3. You'll see a **"Post News"** button in the top-right corner of the hero section (blue button with a plus icon)
4. Click the button to open the post modal
5. Fill in:
   - **Title** (required)
   - **Description** (required)
   - **Image** (optional - click the upload area to select)
6. Click **"Post"** to submit

## Image Upload Details

- **Supported formats**: PNG, JPG, JPEG
- **Max file size**: 5MB
- **Storage location**: `public/uploads/` directory
- **Access URL**: Images are saved as `/uploads/[timestamp]-[filename]`

## Security Features

- Only users with `isAdmin: true` can see the post button
- The API endpoint verifies admin status before allowing posts
- JWT tokens include admin status for authentication
- Unauthorized users receive 401/403 errors

## Database Schema

News posts are saved to the `news` collection with this structure:

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  image: String,          // Path like "/uploads/image.jpg" or null
  author: String,         // User's name or email
  authorId: ObjectId,     // Reference to user._id
  createdAt: Date,
  updatedAt: Date
}
```

## Testing Checklist

- [ ] Set a user as admin using `set-admin.js`
- [ ] Sign in as the admin user
- [ ] Navigate to `/aboutUs`
- [ ] Verify the "Post News" button appears in the hero section
- [ ] Click the button and verify the modal opens
- [ ] Try submitting without title/description (should show error)
- [ ] Submit a complete post with all fields
- [ ] Verify success message appears
- [ ] Check MongoDB `news` collection for the new entry
- [ ] Sign out and verify the button disappears
- [ ] Sign in as a non-admin user and verify the button doesn't appear

## Troubleshooting

### Button doesn't appear after signing in as admin
1. Check that `isAdmin: true` is set in the user document
2. Clear browser cookies and sign in again
3. Check browser console for errors
4. Verify `/api/auth/me` returns `isAdmin: true`

### Image upload fails
1. Ensure `public/uploads` directory exists (it's created automatically)
2. Check file size is under 5MB
3. Verify file format is PNG, JPG, or JPEG
4. Check file permissions on the uploads folder

### API errors
1. Check environment variables (JWT_SECRET, MONGODB_URI)
2. Verify MongoDB connection
3. Check browser network tab for error details
4. Review server console logs

## Next Steps

If you want to display the news posts on a page:
1. Create a GET endpoint in `/pages/api/news/index.js`
2. Add a news listing page or component
3. Fetch and display posts from the database

Would you like me to implement the news display page as well?

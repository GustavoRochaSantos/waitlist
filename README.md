# **Waitlist Form Implementation**

https://github.com/user-attachments/assets/2d0c782b-5c92-40de-b5e4-47515cbf0676

---

Your task is to implement a **Waitlist Signup Form** that allows users to join a waitlist by providing either their **email** or **phone number**. The form should:

1. **Fetch the initial waitlist form type** (`email` or `phone`) from the API.
2. **Render the corresponding input field** based on the API response.
3. **Include a toggle button** to allow users to switch between email and phone manually.
4. **Validate user input** before submission.
5. **Submit the form** via a POST request.
6. **Handle API errors gracefully** and display validation messages.

---

## **API Documentation**

### **Base API URL**

```
https://bucketlisterswaitlist.vercel.app/api
```

### **1. GET `/api`** (Determine Waitlist Type)

- Returns whether the waitlist requires an **email** or **phone number** by default.
- Also returns an **expiration timestamp (`expiresAt`)**, which represents a future time when the form should be disabled. (Bonus exercise)

#### **Example Request:**

```sh
curl -X GET https://bucketlisterswaitlist.vercel.app/api
```

#### **Example Response:**

```json
{ "type": "email", "expiresAt": 1712002500000 }
```

OR

```json
{ "type": "phone", "expiresAt": 1712002500000 }
```

---

### **2. POST `/api`** (Submit Waitlist)

- Accepts a **JSON payload** with `type` (`email` or `phone`) and the corresponding `value`.
- Returns success if the input is valid, otherwise returns an error.

#### **Request Body Format:**

```json
{
  "type": "email",
  "value": "user@example.com"
}
```

#### **Response Examples:**

✅ **Success - Email Waitlist:**

```sh
curl -X POST https://bucketlisterswaitlist.vercel.app/api \
  -H "Content-Type: application/json" \
  -d '{ "type": "email", "value": "user@example.com" }'
```

✅ **Success - Phone Waitlist:**

```sh
curl -X POST https://bucketlisterswaitlist.vercel.app/api \
  -H "Content-Type: application/json" \
  -d '{ "type": "phone", "value": "+1234567890" }'
```

---

❌ **Failure - Invalid Email Format:**

```sh
curl -X POST https://bucketlisterswaitlist.vercel.app/api \
  -H "Content-Type: application/json" \
  -d '{ "type": "email", "value": "invalid-email" }'
```

❌ **Failure - Invalid Phone Format:**

```sh
curl -X POST https://bucketlisterswaitlist.vercel.app/api \
  -H "Content-Type: application/json" \
  -d '{ "type": "phone", "value": "invalid-phone" }'
```

❌ **Failure - Missing Type Field:**

```sh
curl -X POST https://bucketlisterswaitlist.vercel.app/api \
  -H "Content-Type: application/json" \
  -d '{ "value": "user@example.com" }'
```

❌ **Failure - Missing Value Field:**

```sh
curl -X POST https://bucketlisterswaitlist.vercel.app/api \
  -H "Content-Type: application/json" \
  -d '{ "type": "email" }'
```

---

## **Deliverables**

- A **React component** that:
  - Fetches the input type (`email` or `phone`) from the API.
  - Renders the correct input field dynamically.
  - Includes a toggle button to switch between email and phone.
  - Validates the input before submitting.
  - Displays API response messages.
  - Is well-structured and follows best practices.
- The solution should be **functional within any React setup**.

## **Evaluation Criteria**

- ✅ Correct usage of **React hooks**
- ✅ Proper **state management** and controlled inputs.
- ✅ Good **error handling** (display validation errors appropriately).
- ✅ Clean and structured **component design**.
- ✅ Well-formatted, readable, and maintainable **code quality**.

---

## **Bonus (Optional Enhancements)**

- ⏳ Implement **loading states** while fetching API data and submitting the form.
- ⚠️ Add **form submission success/error feedback messages**.
- 🎨 Implement better **styling and UI design** (CSS, Tailwind, or Styled Components)
- ⏱️ **Handle expiration timer**: Using `expiresAt` returned from the API, display a countdown timer on the screen. Once the timer reaches zero, disable form input and prevent submission.

---

### **Good Luck! 🚀**

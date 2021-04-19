package com.example.sajeenthiran.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="Payment")
public class PaymentRequest {
	@Id
 public String id;
	
	public enum Currency{
		Rs,INR,USD;
	}
	   private String description;
	    private int amount;
	    private Currency currency;
	    private String stripeEmail;
	    private Token token;
	    
	    
		public PaymentRequest(String id, String description, int amount, Currency currency, String stripeEmail,
				Token token) {
			super();
			this.id = id;
			this.description = description;
			this.amount = amount;
			this.currency = currency;
			this.stripeEmail = stripeEmail;
			this.token = token;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public int getAmount() {
			return amount;
		}
		public void setAmount(int amount) {
			this.amount = amount;
		}
		public Currency getCurrency() {
			return currency;
		}
		public void setCurrency(Currency currency) {
			this.currency = currency;
		}
		public String getStripeEmail() {
			return stripeEmail;
		}
		public void setStripeEmail(String stripeEmail) {
			this.stripeEmail = stripeEmail;
		}
		public Token getToken() {
			return token;
		}
		public void setToken(Token stripeToken) {
			this.token = stripeToken;
		}
		public String getId() {
			return id;
		}
		public void setId(String id) {
			this.id = id;
		}
		@Override
		public String toString() {
			return "PaymentRequest [id=" + id + ", description=" + description + ", amount=" + amount + ", currency="
					+ currency + ", stripeEmail=" + stripeEmail + ", token=" + token + "]";
		}

	    
	    
}
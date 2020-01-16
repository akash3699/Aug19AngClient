package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "employee")
//@JsonIgnoreProperties({"id","addresss"})
public class Employee {
	@JsonProperty("no") //to match name of the property to JSON property.
	private Integer id;
	private String name, address;
	//In order to skip a property from marshalling n un marshalling
	//@JsonIgnore
	private byte[] image;
/*	@JsonFormat(pattern="yyyy-MM-dd") //used during serialization/marshalling
	//for proper conversion from Date ---> string
	private Date hireDate;
*/
	public Employee() {
		System.out.println("in emp constr");
	}

	public Employee(String name, String address) {
		super();
		this.name = name;
		this.address = address;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="no")
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	@Lob
	public byte[] getImage() {
		return image;
	}

	public void setImage(byte[] image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", address=" + address + "]";
	}

}

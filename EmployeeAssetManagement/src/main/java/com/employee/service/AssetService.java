package com.employee.service;

import java.util.List;

import com.employee.entity.Asset;

public interface AssetService  {
	
	public Asset addAsset(Asset asset);
	public void deleteAsset(int id);
	public Asset updateAsset(int id,Asset asset);
	public List<Asset> viewAllAssets();
	

}
